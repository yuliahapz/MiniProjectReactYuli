import { useRoutes } from "react-router-dom";
import { routeList } from "./Routes/RouteList";
const App = () => {
    const element = useRoutes(routeList);
    return element;
};

export default App;