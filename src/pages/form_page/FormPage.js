import { useFormCard } from '../../hooks/UseFormCards';
import FormCard from '../../components/container/cards/FormCards';

export default function FormCardPage() {
  const {
    formData,
    handleChange,
    handleSubmit,
    editmode,
  } = useFormCard();

  return (
    <FormCard
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      modoEdicao={editmode}
    />
  );
}