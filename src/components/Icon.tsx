import React from 'react'

import styles from './Icon.module.css'

interface Props {
	size?: number
	src: string
}

export const Icon = ({ size = 1.5, src }: Props) => (
	<svg width={size * 16} height={size * 16} className={styles.icon}>
		<use href={`${src}#icon`} />
	</svg>
)

interface IconProps extends Omit<Props, 'src'> {}

export const TrainDetailedIcon = (props: IconProps) => <Icon {...props} src="/assets/icons/TrainDetailed.svg" />
export const VRLogoIcon = (props: IconProps) => <Icon {...props} src="/assets/icons/VRLogo.svg" />
