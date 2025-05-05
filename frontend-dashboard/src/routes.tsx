import {createRoutesFromElements, Route} from "react-router-dom";
import {AuthLayout} from "./layout/AuthLayout";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {DashboardPage} from "./pages/DashboardPage";
import {MainLayout} from "./layout/MainLayout";
import {NotFoundPage} from "./pages/NotFoundPage";
import {PerfilPage} from "./pages/PerfilPage";
import {ContatosPage} from "./pages/ContatosPage";

export const routes = createRoutesFromElements(
    <>
        {/* Área pública sem sidebar */}
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Route>

        {/* Área privada com sidebar */}
        <Route path="/dashboard" element={<MainLayout/>}>
            <Route index element={<DashboardPage/>}/>
            <Route path="perfil" element={<PerfilPage/>}/>
            <Route path="contatos" element={<ContatosPage/>}/>
        </Route>

        <Route path="*" element={<NotFoundPage/>}/>
    </>
)