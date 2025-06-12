import { useNavigate } from 'react-router-dom';
import { useCartoes } from '../../hooks/useCartoes';
import CartaoGrid from '../../components/container/cartao_grid/CartaoGrid';

export default function Home() {
  const { cartoes, removerCartao } = useCartoes();
  const navigate = useNavigate();

  return (
    <CartaoGrid
      cartoes={cartoes}
      onAdd={() => navigate('/form')}
      onEdit={(id) => navigate('/form', { state: { id } })}
      onDelete={removerCartao}
    />
  );
}