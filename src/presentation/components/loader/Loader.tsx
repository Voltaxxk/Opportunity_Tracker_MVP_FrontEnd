
interface Props {
    messageType?: string;
}

export const Loader = ({messageType}: Props) => (
  <div className="text-center text-gray-500 py-8">
    <span className="animate-pulse">Cargando {messageType || 'oportunidades...'} </span>
  </div>
);