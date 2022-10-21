import React, { useState } from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

	const pageSize = 5;

	const columns: GridColDef[] = [
		{
			field: 'actions',
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{params.value}
				</>
			)
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
