export let BasicSquareButton = (props) => (
    <button type="button" class=" py-2 px-2  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
        {props.title ? props.title : "place holder"}
    </button>
)