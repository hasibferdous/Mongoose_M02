import express, {Application} from "express";
import cors from "cors";

const app: Application = express()

//Application routes
import userRoutes from './app/modules/user/user.route'
//using cors 
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.get("/api/v1/user", UserRoutes);
app.use('/api/v1/user', userRoutes);

export default app;

     /**
      * Step1: Interface
      * Step2: Schema
      * Step3: Model
      * Step4: Database Query
      */