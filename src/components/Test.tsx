import React from 'react'
import HydrateProvider from './Hydrate'

import { VRLogoIcon } from './Icon'

export function Test() {
	return (
		<HydrateProvider>
			<VRLogoIcon size={5} />
		</HydrateProvider>
	)
}
