import Sidebar from '../components/Sidebar';

export default function SidebarContainer() {
	return (
		<Sidebar>
			<Sidebar.Profile>
				<Sidebar.Group>
					<Sidebar.Image />
				</Sidebar.Group>
			</Sidebar.Profile>

			<Sidebar.Group>
				<Sidebar.ListGroup>
					<Sidebar.List to='#'>
						<Sidebar.Text>Schools</Sidebar.Text>
					</Sidebar.List>
					<Sidebar.List to='#'>
						<Sidebar.Text>Meeting</Sidebar.Text>
					</Sidebar.List>
					<Sidebar.List to='#'>
						<Sidebar.Text>Standalone</Sidebar.Text>
					</Sidebar.List>
					<Sidebar.List to='#'>
						<Sidebar.Text>Profile</Sidebar.Text>
					</Sidebar.List>
				</Sidebar.ListGroup>
			</Sidebar.Group>
		</Sidebar>
	);
}
