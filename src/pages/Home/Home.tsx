import React, { ChangeEvent, useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

	const handlechange = (people: Person) => (eve: ChangeEvent<HTMLInputElement>) => {
		const { checked } = eve.target;
		setSelectedPeople(prevState => {
			if (checked) {
				return [...prevState, people];
			}

			return prevState.filter(p => p.id !== people.id);
		});
	};

	const pageSize = 5;

	const columns: GridColDef[] = [
		{
			field: 'actions',
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => {
				const selected = selectedPeople.find(people => people.id === params.row.id);

				return (
					<Checkbox
						checked={!!selected}
						onChange={handlechange(params.row)}
					/>
				)
			}
		},
		{
			field: 'name',
			headerName: 'nombre',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{params.value}
				</>
			)
		},
		{
			field: 'category',
			headerName: 'categoria',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{params.value}
				</>
			)
		},
		{
			field: 'company',
			headerName: 'compania',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{params.value}
				</>
			)
		}
	];

	return (
		<DataGrid
			columns={columns}
			rows={People}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default Home;
