export default function FormStatus({ message, error=false }: {message:string; error?:boolean}) {
  if (!message) return null;
  return <p className={error ? "form-status error" : "form-status"} role="status">{message}</p>;
}
