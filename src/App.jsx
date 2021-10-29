import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Menu } from "./components/Menu";
import { SubPage } from "./components/SubPage";

import logo from "./logo.svg";
import "./App.css";
import { CABWidget } from "./components/CABWidget";

const routes = [
  {
    path: "/page1",
    title: "Page 1",
  },
  {
    path: "/page2",
    title: "Page 2",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Menu routes={routes} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/page1" />
          </Route>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <SubPage />
            </Route>
          ))}
        </Switch>
      </Router>
      <CABWidget />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus
        enim ligula, vel tincidunt neque pretium sed. Donec placerat lorem
        dolor, eget aliquam lorem condimentum at. Vestibulum vel aliquet lectus.
        Suspendisse quis tortor eu turpis ultrices feugiat. Vivamus efficitur
        dui nec blandit facilisis. Phasellus dictum libero eget ullamcorper
        tempor. Integer convallis posuere imperdiet. Mauris sed sapien quis
        tortor elementum tincidunt. Nunc eget lacus ultricies, laoreet mauris
        non, finibus dui. In vulputate ac orci nec pretium. Donec quam nibh,
        lobortis id velit et, pellentesque convallis enim. Etiam dapibus
        sagittis nisl, vitae pretium lectus bibendum non. Sed rhoncus ultricies
        tortor, eu consectetur magna euismod sit amet. Pellentesque ullamcorper
        orci a varius iaculis. Cras sagittis enim aliquam mollis ullamcorper.
        Donec aliquam ac orci sit amet elementum. Proin nec metus id nibh
        pretium varius. Morbi in dui purus. Aliquam erat volutpat. Mauris
        placerat dictum urna quis pulvinar. Integer eget dui aliquet, ornare mi
        sed, sollicitudin nunc. Sed eget arcu maximus, semper nunc a, iaculis
        dui. Mauris a tellus porttitor, consectetur elit id, efficitur justo.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Proin vel libero eu nunc lacinia congue. Donec molestie
        aliquam erat, ac tincidunt neque vestibulum a. Quisque auctor nulla
        erat, quis lobortis purus euismod ac. Maecenas nisl metus, tempus eget
        maximus in, volutpat nec est. Integer non sapien aliquam, varius nisi a,
        gravida purus. Ut interdum placerat ex, et pulvinar nulla finibus at.
        Donec pretium molestie imperdiet. Quisque mattis nisl pellentesque
        mollis accumsan. Morbi a tortor scelerisque, dignissim lectus commodo,
        blandit tellus. Curabitur sodales non purus ut placerat. Vivamus ut odio
        finibus, pretium tellus id, vulputate ipsum. Nulla consequat, felis non
        euismod dapibus, velit elit pharetra eros, vitae gravida tellus ipsum
        sed elit. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aliquam mattis auctor sodales. Maecenas diam
        magna, dapibus vel congue et, pellentesque at lacus. In erat urna,
        convallis at arcu eget, dictum dictum orci. Pellentesque purus eros,
        consectetur id vestibulum id, rhoncus id sapien. Nunc cursus ut est id
        cursus. Duis vulputate, dui ut vehicula pulvinar, elit eros malesuada
        erat, non tristique metus ligula vel sem. Proin hendrerit fringilla
        nisl. Sed consequat ipsum et diam mattis rhoncus. In sollicitudin
        iaculis enim, vel eleifend dui suscipit quis. Integer gravida augue in
        metus porta, ut porta massa placerat. Praesent ornare, turpis tempus
        vestibulum tempor, tortor risus tempus metus, eu mollis augue tellus et
        lectus. Sed mollis pellentesque facilisis. Nullam tortor metus, ultrices
        eget vestibulum in, sodales at nulla. Sed bibendum consectetur purus
        feugiat aliquam. Nulla tincidunt neque vitae elit euismod, quis
        porttitor turpis consequat. Etiam sed dapibus massa. In id lectus ut
        lectus fermentum rhoncus sollicitudin at ex. Vestibulum ultricies lectus
        lorem, in feugiat sem malesuada eget. Etiam fringilla varius eros.
        Phasellus rhoncus arcu lectus, vel imperdiet nisi aliquam ut. Donec
        semper pellentesque est eu eleifend. Morbi efficitur ornare nisi, id
        aliquet libero imperdiet sit amet. Pellentesque non suscipit leo.
        Aliquam blandit, ante vel viverra elementum, lacus felis venenatis leo,
        nec volutpat arcu risus sed felis. Praesent fringilla justo id nisi
        vulputate aliquet. Sed eget sagittis leo. Phasellus ornare dignissim
        quam sit amet auctor. Praesent dapibus tortor in massa posuere sagittis.
        Phasellus lobortis risus sit amet magna pellentesque consectetur. Duis
        at est posuere, imperdiet ipsum a, tincidunt diam. Curabitur eleifend
        urna orci, vel commodo purus scelerisque nec. Nulla faucibus efficitur
        ipsum, eu fermentum nisl sodales ac. Fusce tincidunt dignissim mollis.
        Cras non enim a dui tristique sollicitudin ut eget erat. Sed blandit
        venenatis sagittis. Fusce massa sapien, bibendum ac pharetra at, varius
        a nulla. Quisque pretium risus a felis dictum, id volutpat metus
        accumsan. Aliquam vehicula ex sodales dolor volutpat consequat. Donec
        molestie urna tortor, vitae consequat velit volutpat nec. Vestibulum
        dolor urna, bibendum id nisl at, tempus aliquam justo. Aliquam ligula
        leo, sagittis eget ante eu, dictum dignissim est. Maecenas posuere sem
        at ipsum vulputate elementum. Donec tempus, augue nec bibendum
        imperdiet, orci nulla convallis velit, vel dapibus dolor sem sit amet
        metus. Vivamus et aliquet diam. In hac habitasse platea dictumst.
        Praesent malesuada arcu magna, et laoreet ligula pretium sed. Donec
        sagittis egestas feugiat. Cras tortor mauris, interdum ac lacus quis,
        ornare imperdiet diam. Curabitur felis nibh, porttitor a orci eget,
        porta malesuada massa. Morbi aliquet mauris in lectus sollicitudin,
        iaculis facilisis sem dignissim. Curabitur quis nibh et nunc mattis
        consectetur. Fusce rutrum eleifend rutrum. Curabitur faucibus non lectus
        iaculis porta. Donec cursus tincidunt mi, nec imperdiet risus sagittis
        in. Aliquam erat volutpat. Duis id scelerisque ex, id maximus velit.
        Aliquam gravida, dolor a tincidunt consectetur, lectus sem sodales nibh,
        non venenatis justo enim non ligula. Nullam quis libero sit amet elit
        sollicitudin volutpat. Suspendisse eget faucibus ante. Etiam erat nunc,
        laoreet et quam sit amet, auctor vestibulum metus. Suspendisse faucibus
        eget metus eu pellentesque. Morbi eu sem convallis, pharetra turpis vel,
        pellentesque dolor. Nullam sit amet turpis faucibus, accumsan risus non,
        facilisis mauris.
      </p>
    </div>
  );
}

export default App;
