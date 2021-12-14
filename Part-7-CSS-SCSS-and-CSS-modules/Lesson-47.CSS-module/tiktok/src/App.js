import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import GlobalStyles from "./components/GlobalStyles";

function App() {

  return (
    <GlobalStyles>
      <div style={{ padding: 20 }}>
        <Heading />
        <Paragraph />
      </div>
    </GlobalStyles>
  )

}

export default App;
