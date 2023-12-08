import { BsCart3 } from 'react-icons/bs'
import { Button } from '.'
import Menu from './Menu'
const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center h-[100px] py-6">
      <div className="font-bold text-[40px]">Funtech</div>
      <div className="flex text-abu-hitam font-medium gap-[40px]">
        <Menu />
      </div>
      <div className="flex gap-4 items-center">
        <div className="relative">
          <BsCart3 className="h-6 w-6" />
          <span className="absolute top-[-10px] left-[10px] bg-hitam text-putih rounded-full text-xs pt-[3px] pl-[6px] w-5 h-5">
            0
          </span>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </header>
  )
}

export default Header
