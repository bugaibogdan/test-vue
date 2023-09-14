import { createStore } from "vuex";
import { restorauntModule } from "./restorauntModule";
import { partenersModule } from "./partenersModule";
import { basketModule } from "./basketModule";

export default createStore({
  modules: {
    restoraunt: restorauntModule,
    parteners: partenersModule,
    basket: basketModule,
  },
});
