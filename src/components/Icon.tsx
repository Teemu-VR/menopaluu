import React from 'react'
import { Icon, IconProps } from '@vr-core/web-components'
import { default as VRLogo } from '@vr-core/web-components/icons/VRLogo.svg'
import { useIsHydrated } from './Hydrate'

export const VRLogoIcon = (props: IconProps) =>
	// this check exists as a workaround due to <Icon /> not rendering on Astro SSR :(
	useIsHydrated() ? (
		<Icon src={VRLogo} {...props} />
	) : (
		<svg width={(props.size ?? 1.5) * 16} height={(props.size ?? 1.5) * 16} />
	)
