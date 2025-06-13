import { useState } from "react";
import { postApplication } from "../../shared/api/aplication/applicationApi";
import type { UTMParams } from "../../interfaces/utm.interface";


const initialForm = {
  name: "",
  email: "",
  message: "",
};

export const useApplicationForm = (
  opportunityId: string,
  utm: UTMParams = {},
  onSuccess?: () => void
) => {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | { type: "success" | "error"; msg: string }>(null);

  const sanitize = (value: string) => value.replace(/[<>]/g, "");

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim())
      return "Todos los campos son obligatorios.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Por favor, ingresa un correo válido.";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationMsg = validate();
    if (validationMsg) {
      setFeedback({ type: "error", msg: validationMsg });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      await postApplication({
        name: sanitize(form.name),
        email: sanitize(form.email),
        message: sanitize(form.message),
        opportunityId,
        utm_source: utm.utm_source || "",
        utm_medium: utm.utm_medium || "",
        utm_campaign: utm.utm_campaign || "",
      });

      setFeedback({ type: "success", msg: "¡Postulación enviada correctamente!" });
      setForm(initialForm);
      setTouched({});
      if (onSuccess) onSuccess();
    } catch (err) {
      setFeedback({ type: "error", msg: "Error al enviar la postulación. Intenta de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    touched,
    loading,
    feedback,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
