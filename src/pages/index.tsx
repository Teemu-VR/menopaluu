import React from 'react'

import { TrainDetailedIcon, VRLogoIcon } from '../components/Icon'
import { TimelineMainBlock } from '../components/TimelineMainBlock'

export function Article() {
	return (
		<>
			<VRLogoIcon size={5} />
			<h1>Hepskukkuu!</h1>
			<p>Hei meillä on joku sivu.</p>
			<p>Jossa on jotain tavaraa, yay.</p>
			<button className="button green10Button" type="button">
				Nappula
			</button>
			<TimelineMainBlock
				id="eka-iso-juttu"
				icon={<TrainDetailedIcon />}
				image={<div style={{ width: '20rem', height: '15rem', background: 'black' }} />}
				header={
					<>
						<h2>Testausta</h2>
						<p>Ollapa sisältöä.</p>
					</>
				}
			>
				<h3>No mutta!</h3>
				<p>Meillähän ON sisältöä!</p>
			</TimelineMainBlock>
			<TimelineMainBlock
				id="toka-iso-juttu"
				image={<div style={{ width: '20rem', height: '15rem', background: 'black' }} />}
				header={<h2>Toisenlaista testausta</h2>}
			>
				<h3>Alinomaista kontenttia</h3>
				<p>Niin maan paljon on sitä.</p>
			</TimelineMainBlock>
		</>
	)
}
