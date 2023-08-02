import React from "react";
import ReactDOM from "react-dom/client";
import Axiosjson from "./assets/useEffect/Assignment/Code By Srivardhan/Axiosjson";

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
} from "react-router-dom";

// import App from './App.jsx'
import "./index.css";
// import ClassComp from './ClassCom.jsx'
// import ClassCom1 from "./ClassCom1";
// import StateWithCC from "./StateCC";
import "./App.css";
// import ListRender from "./assets/ListRendering/listRender";
import ListRenderAdd from "./assets/ListRendering/ListRenderAdd";
import AddToDoList from "./assets/Dynamic Props/TO Do Assignment/AddToDoList";
// import ToDoList1 from "./assets/Dynamic Props/TO Do Assignment/ToDoList1";
// import ParentView from "./assets/Props/ParentView";
// import HomeView from "./assets/Dynamic Props/HomeView1";
// import HomeView1 from "./assets/Dynamic Props/HomeView1";
// import ClassComp from "./ClassCom";
// import Calculator from "./calculator";
// import Calculator1 from "./calculator_by_me";
// import Form from "./simple_Form";
// import FormCC from "./Form_dynamic_state_update";
// import FCCounter from "./fun_com_counter";
// import SimpleForm from "./fun_com_form";
// import AssignmentForm from "./F_com_Form_Assignment";
// import AssignmentForm_01 from "./F_com_Form_Assignment_01";
// import AssignmentForm_02 from "./F_com_Form_Assignment_02";
// import Counter from "./CounterFun";

// import Counter1 from "./CounterUpdated";
// import UpDownCounter from "./UP_Down_Counter";
// import Personal_Data_Login from "./F_com_Form_Assignment_03";
// Personal_Data_Login;
// import ParentView from "./assets/Props";
// import HomeView1 from "./assets/Dynamic Props/Example1/HomeView1";
// import ParentColor from "./assets/Dynamic Props/ColorChange/ParentColor";
// import ProductView from "./assets/Dynamic Props/cart-product example/ProductView";
// import ParentComp from "./assets/AssignmentByVishal/ParentComp";
import ColorListRender from "./assets/ListRendering/ColorListRender";
import ParentColorComponent from "./assets/ListRendering/Color Listing Using Props/ParentColorComponent";
import ParentData from "./assets/ProggramBy Vikas/ParentData";
import ParentCompSample from "./assets/Dynamic Props/Passing props from child to parent/CountIncrementDecrementV1/ParentCompSample";
import EmojisParent from "./assets/Dynamic Props/Passing props from child to parent/EmogiSelectionV1/EmojisParent";
import ParentV2 from "./assets/Dynamic Props/Passing props from child to parent/CountIncrementDecrementV2/ParentV2";
import AccordianPV2 from "./assets/Dynamic Props/Passing props from child to parent/Accordian/AccordianPV2";
import ParentMessage from "./assets/Dynamic Props/Passing props from child to parent/SimpleMessageExample/parent";
import ConditionalRenderingV1 from "./assets/ConditionalRendering/ConditionalRenderingV1/ConditionalRenderingV1";
import MainC from "./assets/ConditionalRendering/RenderingBasedOn BooleanInput/MainC";
import Component from "./assets/styled components/Component";
import Firebase from "./assets/firebase/Firebase";
import App1 from "./assets/Routing/App1";
import App2 from "./assets/Routing/App2";
import ProductList from "./assets/useEffect/fetchexample";
import ProductList1 from "./assets/useEffect/fetchexample1";
import ProductListUI from "./assets/useEffect/fetchExampleV3/ProductListUI.Layout";
import ProductPage from "./assets/useEffect/Assignment/ProductMainPage";
import ProductList123 from "./assets/useEffect/Assignment/ProductMainPageV1";
// import MainPage from "./assets/useEffect/Assignment/Code By Srivardhan/MainPage";
// import Details from "./assets/useEffect/Assignment/Code By Srivardhan/Details";
import UseEffectExample from "./assets/useEffect/UseEffect Types/USeEffectTypes";
import UseEffectExamplesV1 from "./assets/useEffect/useEffect Use Cases/UseEffectExamplesV1";
import FirstP from "./assets/useEffect/Youtube/firstP";
import AddToCart from "./assets/useEffect/useEffect Use Cases/Assignment/addToCart";
import AddToCart1 from "./assets/useEffect/useEffect Use Cases/Assignment/addToCart copy";
import Parent from "./assets/AssignmentByVishal/Parent";
// import { LoopsBest } from "./assets/UseMemo/Second Program";
import UseEffect from "./assets/UseMemo/My Practice/useEffect";
import TodoList from "./assets/ToDoList/TODO";
// import Products from "./assets/Recap Session/1";
import TodoList1 from "./assets/ToDoList/ToDo1";
// import ParentC from "./assets/UseCallBack/ParentComponent";
import UseCallbackV22 from "./assets/UseCallBack/CountExample";
import ParentD24A from "./assets/UseContext/ParentD24A";
import FormComponent from "./assets/Code Conversion from class to function component/classcode";
import Functioncode from "./assets/Code Conversion from class to function component/functioncode";
import ApiCalling from "./assets/UseMemo/My Practice/ApiCalling";
// import Parent1 from "./assets/UseCallBack/MyPractice/Practice1/Parent1";
import MyComponent1 from "./assets/UseMemo/My Practice/Practice Ex1/Ex1";
import MyComponent3 from "./assets/UseMemo/My Practice/Practice Ex1/Ex2";
// import UseMemo from "./assets/UseMemo/My Practice/BasicuseMemo";
import ParentC from "./assets/UseCallBack/MyPractice/Practice2/ParentC";
import Counter from "./assets/CustomHook/Counter";
import Parent1 from "./assets/UseContext/Practice/Practice1/Parent1";
import App3 from "./assets/Children Prop/App3";
import App4 from "./assets/Wrapper Component/App4";
import Parentrouter from "./assets/React Routers/Practice1/Component1";
import OTPFun from "./assets/UseRef/Assignment/OTP";
import SumInputs from "./assets/AssignmentByVishal/SumofnosbyDynamicallyCreatedInputs.jsx/sum";

// import { APIWithoutUseMemo } from "./assets/UseMemo/FirstProgram";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Axiosjson />,
//   },
//   {
//     path: "details/:id",
//     element: <Details />,
//   },
// ]);
import Home from "./assets/RoterDOM Example/Home";
import Contact from "./assets/RoterDOM Example/Contact";
import HOC1 from "./assets/HOC Assignment/MyPractice1/HOC1";
import Child1HOC from "./assets/HOC Assignment/MyPractice1/Child1HOC";
import Child2HOC from "./assets/HOC Assignment/MyPractice1/Child2HOC";
import DynamicForm from "./assets/Assignment-DynamicForm/DynamicForm";
import Form_Practice from "./Form_Practice";
import Formdynamic from "./assets/Forms/DynamicFormByVikas/Formdynamic";
import DynamicFormV1 from "./assets/Assignment-DynamicForm/DynamicFormV1";
import Todo1 from "./assets/ToDo App/TodoList";
// import ExpenceTracker from "./assets/Expense Tracker/ExpenseTracer";
import Todo from "./assets/Small Projects/Todo/Todo";
import ManasDynamicFields from "./assets/Adding three inputs Field Dynamically Assignment by Vishal/ThreeInputsFields";
import WithUseRef from "./assets/UseRef/UseRef";
import FormWithUseRef from "./assets/UseRef/FormCreation/StelessForm";
import OTPSingleRef from "./assets/UseRef/Assignment/OTPSingleRef";
import LocalStorageExample from "./assets/LOcalStorage & Session Storage/LocalStorage";
import SessionStorageExample from "./assets/LOcalStorage & Session Storage/SessionStorage";
import MainPage from "./assets/Assignment-Subjectsnames/MainPage";
import FormComponent1 from "./assets/Assignment in 10-30 Class (Form)/FormNew2";
import FormComponent3 from "./assets/Assignment in 10-30 Class (Form)/OriginalCode";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// import ProductDetails from "./assets/React Routers/Dynamic RoutingV1/ProductDetails";
import MyProducts from "./assets/React Routers/Dynamic RoutingV1/MyProducts";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyProducts />,
//   },
//   {
//     path: "/product/:id",
//     element: <ProductDetails />,
//   },
// ]);

//code for product details & after clicking on one product showing its details
import MyProductsV2 from "./assets/React Routers/Dynamic RoutingV2/MyProductsV2";
import ProductDetailsV2 from "./assets/React Routers/Dynamic RoutingV2/ProductDetailsV2";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyProductsV2 />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDetailsV2 />,
//   },
// ]);

//Api fetch caching assignment
import MyProductsV3 from "./assets/React Routers/Dynamic RoutingV1/Assignment3/MyProductsV3";
import ProductDetailsV3 from "./assets/React Routers/Dynamic RoutingV1/Assignment3/ProductDetailsV3";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MyProductsV3 />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDetailsV3 />,
//   },
// ]);

//Api fetch Caching Assignment Ajit Code

import Products from "./assets/React Routers/Dynamic RoutingV1/Assignment3/Code by Ajit/Products";
import ProductDetails from "./assets/React Routers/Dynamic RoutingV1/Assignment3/Code by Ajit/ProductDetails";
// import ProductContext from "./assets/React Routers/Dynamic RoutingV1/Assignment3/Code by Ajit/Context";
import ProductProvider from "./assets/React Routers/Dynamic RoutingV1/Assignment3/Code by Ajit/Context";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Products />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDetails />,
//   },
// ]);

import ProductListAssignment from "./assets/React Routers/Dynamic RoutingV1/Assignment1/ProductList";
import ProductDeatilsAssignment from "./assets/React Routers/Dynamic RoutingV1/Assignment1/ProductDetails";
import ProductSearch from "./assets/React Routers/Dynamic RoutingV1/Assignment1/Search";
// import QueryParameter from "./assets/React Routers/Dynamic RoutingV1/Assignment2/QueryParameter";
import CounterInterview from "./assets/Interview/Lifecycle";
import Repeate3InputFields from "./assets/Adding three inputs Field Dynamically Assignment by Vishal/RepeativeThreeInputFields";

//Below Roter details for fetching data on click events.
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProductListAssignment />,
//     // element: <QueryParameter />,
//   },
//   {
//     path: "/product/:productId",
//     element: <ProductDeatilsAssignment />,
//   },
// {
//   path: "/product/:productId/:brandId",
//   element: <ProductSearch />,
// },
// ]);

// import Home from "./assets/HOC Assignment/Home";
// import Login from "./assets/HOC Assignment/Login";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
// ]);

import TaskJson from "./assets/UseContext/Assignment to reduce Api call after going back from card details page to main page/TaskJson";
import TaskDetails from "./assets/UseContext/Assignment to reduce Api call after going back from card details page to main page/TaskDetails";
import { TaskJsonProvider } from "./assets/UseContext/Assignment to reduce Api call after going back from card details page to main page/PassJson";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskJson />,
  },
  {
    path: "/:id",
    element: <TaskDetails />,
  },
  // {
  //   path: "/search",
  //   element: <Search />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <TaskJsonProvider>
      <RouterProvider router={router} />
    </TaskJsonProvider> */}
    {/* <RouterProvider router={router} /> */}
    {/* <ProductView> */}
    {/* <ClassCom1 />
    <ClassComp />
    <StateWithCC />
    <Calculator />
    <Calculator1 />
    <Form /> */}
    {/* <FormCC /> */}
    {/* <FCCounter />
    <SimpleForm /> */}
    {/* <AssignmentForm /> */}
    {/* <AssignmentForm_01 /> */}
    {/* <AssignmentForm_02 /> */}
    {/* <Counter /> */}
    {/* <Counter1 /> */}
    {/* <UpDownCounter /> */}
    {/* <Personal_Data_Login /> */}
    {/* <ParentView />*/}
    {/* <HomeView1 /> */}
    {/* <ParentColor /> */}
    {/* <ProductView /> */}
    {/* <AddToDoList /> */}
    {/* <ParentComp /> */}
    {/* <AddTodoView /> */}
    {/* <ToDoList1 /> */}
    {/* <ListRender /> */}
    {/* <ListRenderAdd /> */}
    {/* <ColorListRender /> */}
    {/* <ParentColorComponent /> */}
    {/* <ParentData />
    <ParentCompSample /> */}
    {/* <EmojisParent /> */}
    {/* <ParentV2 />*/}
    {/* <AccordianPV2 /> */}
    {/* <ParentMessage />  */}
    {/* <ConditionalRenderingV1 /> */}
    {/* <MainC /> */}
    {/* <Component /> */}
    {/* <Firebase /> */}
    {/* <App1 />
    <App2 />
    <ProductList /> */}
    {/* <ProductList1 /> */}
    {/* <ProductListUI /> */}
    {/* <ProductPage /> */}
    {/* <ProductList123 /> */}
    {/* <MainPage /> */}
    {/* <UseEffectExample /> */}
    {/* <FirstP /> */}
    {/* <UseEffectExamplesV1 /> */}
    {/* <AddToCart /> */}
    {/* <AddToCart1 /> */}
    {/* <Parent /> */}
    {/* <APIWithoutUseMemo /> */}
    {/* <LoopsBest /> */}
    {/* <UseMemo /> */}
    {/* <UseEffect /> */}
    {/* <TodoList /> */}
    {/* <Products /> */}
    {/* <TodoList1 /> */}
    {/* <ParentC /> */}
    {/* <UseCallbackV22 /> */}
    {/* <ParentD24A /> */}
    {/* <FormComponent /> */}
    {/* <Functioncode /> */}
    {/* <ApiCalling /> */}
    {/* <Parent1 /> */}
    {/* <MyComponent1 /> */}
    {/* <MyComponent3 /> */}
    {/* <ParentC /> */}
    {/* <Counter /> */}
    {/* <Parent1 /> */}
    {/* <App3 /> */}
    {/* <App4 /> */}
    {/* <Parentrouter /> */}
    {/* <ProductProvider> */}
    {/* <RouterProvider router={router} /> */}
    {/* </ProductProvider> */}

    {/* <Child1HOC />
    <Child2HOC />
    <HOC1 /> */}
    {/* <DynamicForm /> */}
    {/* <Form_Practice /> */}
    {/* <Formdynamic /> */}
    {/* <DynamicFormV1 /> */}
    {/* <ProductListAssignment /> */}
    {/* <Todo /> */}
    {/* <CounterInterview /> */}
    {/* <QueryParameter /> */}
    {/* <ExpenceTracker /> */}
    {/* <Todo /> */}
    {/* <ManasDynamicFields /> */}
    {/* <WithUseRef /> */}
    {/* <FormWithUseRef /> */}
    {/* <OTPFun /> */}
    {/* <OTPSingleRef /> */}
    {/* <SumInputs /> */}
    {/* <Repeate3InputFields /> */}
    {/* <LocalStorageExample /> */}
    {/* <SessionStorageExample /> */}
    {/* <MainPage /> */}
    <FormComponent1 />
    <FormComponent3 />
  </>
);
