import { FaPlus, FaMinus } from 'react-icons/fa'

interface AmountButtonsProps {
  increase: () => void
  decrease: () => void
  amount: number
}

const AmountButtons: React.FC<AmountButtonsProps> = ({
  increase,
  decrease,
  amount,
}) => {
  return (
    <div className="flex gap-2">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  )
}

export default AmountButtons
