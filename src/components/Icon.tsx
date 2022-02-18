import React from 'react'
import { default as VRLogo } from '@vr-core/web-components/icons/VRLogo.svg'

import styles from './Icon.module.css'

export const VRLogoIcon = ({ size = 1.5 }) =>
	<svg  width={size * 16} height={size * 16} className={styles.icon}>
		<use href={`${VRLogo}#icon`} />
	</svg>
