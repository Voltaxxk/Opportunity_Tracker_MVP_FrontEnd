import { useApplicationForm } from "../../../hooks/applications/useApplicationForm";
import type { AplicationForm } from "../../../interfaces/applicationForm.interface";
import styles from "./OpportunityApplicationForm.module.css";



export const OpportunityApplicationForm = ({ opportunityId, utm = {}, onSuccess }: AplicationForm) => {
  const {
    form,
    touched,
    loading,
    feedback,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useApplicationForm(opportunityId, utm, onSuccess);

//   const inputStyles =
//     "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition disabled:bg-gray-100";
//   const labelStyles = "block mb-1 font-medium";
//   const errorStyles = "text-xs text-red-600 mt-1";

 return (
    <form onSubmit={handleSubmit} className={styles["opportunity-form"]}>
      <div className={styles["opportunity-form__field"]}>
        <label className={styles["opportunity-form__label"]} htmlFor="name">Nombre</label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles["opportunity-form__input"]}
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={loading}
          autoComplete="name"
          required
        />
        {touched.name && !form.name.trim() && (
          <div className={styles["opportunity-form__error"]}>El nombre es obligatorio.</div>
        )}
      </div>
      <div className={styles["opportunity-form__field"]}>
        <label className={styles["opportunity-form__label"]} htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles["opportunity-form__input"]}
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={loading}
          autoComplete="email"
          required
        />
        {touched.email && !form.email.trim() && (
          <div className={styles["opportunity-form__error"]}>El email es obligatorio.</div>
        )}
        {touched.email && form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) && (
          <div className={styles["opportunity-form__error"]}>El email no es válido.</div>
        )}
      </div>
      <div className={styles["opportunity-form__field"]}>
        <label className={styles["opportunity-form__label"]} htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          className={styles["opportunity-form__textarea"]}
          rows={4}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={loading}
          required
        />
        {touched.message && !form.message.trim() && (
          <div className={styles["opportunity-form__error"]}>El mensaje es obligatorio.</div>
        )}
      </div>
      <button
        type="submit"
        className={styles["opportunity-form__submit"]}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar Postulación"}
      </button>
      {feedback && (
        <div
          className={`${styles["opportunity-form__feedback"]} ${feedback.type === "error"
            ? styles["opportunity-form__feedback--error"]
            : styles["opportunity-form__feedback--success"]
            }`}
          role="alert"
        >
          {feedback.msg}
        </div>
      )}
    </form>
  );
};
