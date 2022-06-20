import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
	const [countryData, setcountryData] = useState([])
	const handleCurrencyData = async () => {
		const { data } = await axios.get("https://restcountries.com/v2/all")
		setcountryData(data)
	}
	useEffect(() => {
		handleCurrencyData()
	}, [])

	return (
		<div className='container'>
			<div className="row">
				<table class="table table-bordered">
					<thead>
						<tr>
							<th scope="col">Sr No</th>
							<th scope="col">Name</th>
							<th scope="col">Capital</th>
							<th scope="col">Currency</th>
						</tr>
					</thead>
					{
						countryData.map((item, i) => <tbody>
							<tr>
								<th scope="row">{i + 1}</th>
								<td>{item.name}</td>
								<td>{item.capital}</td>
								{item.currencies?.map(item =><td>{item.name}</td>)}
							</tr>
						</tbody>)
					}

				</table>

							</div>
		</div>
	)
}
