import React, { Component } from "react";
import {
    DigitHeader,
    DigitProviders,
    DigitText
} from "@cthit/react-digit-components";

class App extends Component {
  render(
      preloadedState = {
        loading: true,
      }
  ) {
    return (
        <DigitProviders
            preloadedState={preloadedState}
            defaultLangauge="sv"
        >
            <DigitHeader
                title="digIT-aspning"
                renderMain={() => (
                    <div>
                        <DigitText.Text text={"Hej asp!"}/>
                    </div>
                )}
            />
        </DigitProviders>
    );
  }
}

export default App;
