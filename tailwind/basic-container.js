export let BasicContainer = (props) => (
    <div class="container mx-auto">
        {props.children}
    </div>
)

export let BasicContainerFlexFlow  = (props) => (
    <div class="flex flex-row m-3">
        {props.children}
    </div>
)
export let BasicContainerGrid  = (props) => (
    <div className={`grid grid-cols-${props.cols ? props.cols : 2} gap-2`}>
        {props.children}
    </div>
)