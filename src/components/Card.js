import './card.css'

const Card = ({ name, email, id }) => {
	return (
		<div className = 'bg-light-green dib pa3 ma2 bw2 grow shadow-5 '>
			<img alt = '' src = {`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;