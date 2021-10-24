import RAF from '@/three/RAF'

let raf: RAF | null = null

const useRAF = () => {
	return raf || (raf = new RAF())
}

export default useRAF
