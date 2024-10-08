import { ChampionDetail, ChampionSkin } from '@/lib/types/Champion'
import { splashImgUrl } from '@/lib/constants/constants'
import Image from 'next/image'
import { ReusableModal } from '../shared/ReusableModal'

type Props = {
  selectedSkin: ChampionSkin | null
  isOpen: boolean
  onClose: () => void
  champion: ChampionDetail | null
}

export function ModalItems({ selectedSkin, isOpen, onClose, champion }: Props) {
  if (!isOpen || !selectedSkin || !champion) return null

  return (
    <ReusableModal isOpen={isOpen} onClose={onClose} title={selectedSkin.name} description="아래에서 선택한 챔피언의 스킨을 확인하세요.">
      <div className="flex flex-col items-center gap-4">
        <Image src={`${splashImgUrl}/${champion.id}_${selectedSkin.num}.jpg`} alt={selectedSkin.name} width={550} height={324} className="object-cover" priority />
      </div>
    </ReusableModal>
  )
}
