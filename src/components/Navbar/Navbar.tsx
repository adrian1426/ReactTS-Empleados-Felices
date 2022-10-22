import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {

	const handleclick = () => {
		dialogOpenSubject$.setSubject = true;
	};

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Adrian Hernandez
					</Typography>

					<Button
						onClick={handleclick}
						variant='contained'>
						Favoritos
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
