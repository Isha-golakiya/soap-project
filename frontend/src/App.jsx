import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import EndRoutes from './routes/end_routes'
import AdminRoutes from './routes/admin_routes';

function App() {
 

  return (
    <>
      <EndRoutes/>
      <AdminRoutes/>
    </>
  )
}

export default App
