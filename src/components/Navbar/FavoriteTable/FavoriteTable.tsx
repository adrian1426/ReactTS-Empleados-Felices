import { Person } from '@/models';
import { addFavorite, removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridColDef, GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const FavoriteTable = () => {
	const selectedPeople = useSelector((state: AppStore) => state.favorites);
	const dispatch = useDispatch();

	const handlechange = (people: Person) => (eve: ChangeEvent<HTMLInputElement>) => {
		const { checked } = eve.target;

		if (checked) {
			dispatch(addFavorite(people));
			return;
		}

		dispatch(removeFavorite(people));
	};

	const pageSize = 5;

	const columns: GridColDef[] = [
		{
			field: 'actions',
			sortable: false,
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
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Nivel felicidad',
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
			rows={selectedPeople}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default FavoriteTable;
