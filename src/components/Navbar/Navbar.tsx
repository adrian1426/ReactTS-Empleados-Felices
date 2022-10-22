import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
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
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
