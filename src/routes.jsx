import { DashboardPages } from './pages/dashboard';
import { Auth } from './pages/auth';


const routes = [
    {path: 'auth', element: <Auth/>},
    {path: '/*', element: <DashboardPages/>}
]

export default routes