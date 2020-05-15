# learning-react
Learning basic react

# Component Lifecycle

Only available in class-based Components

``` constructor() ```                              ``` shouldComponentUpdate()  ```

``` getDerivedStateFromProps() ```                 ``` componentDidUpdate() ```

``` getSnapshotBeforUpdate()  ```                  ``` componetDidMount ```

``` componentWillUnmount() ```                     ``` render() ```

``` componentDidCatch()  ```

# Component Lifecycle-creation

1 -> constructor(props) -> (default ES6 class Feature  )
call super(props)
Do:Set up State
Do not : Cause side - Effects

2 -> getDerivedStateFromProps()props, state)
Do:Sync State
Do not : Cause side - Effects

3 -> render()  
Prepare & Structure your JSX code

4 ->  Render Child components

5 -> componetDidMount()
Do:Cause side - Effects
Do not : Update state (triggers re-render)

# Component Lifecycle-update


1 -> getDerivedStateFromProps()props, state)
Do:Sync State
Do not : Cause side - Effects

2 -> shouldComponentUpdate(nextProps, nextState) 
Do:Descide whether to continue or not
Do not : Cause side - Effects

3 -> render()  
Prepare & Structure your JSX code

4 ->  update Child components props

5 -> getSnapshotBeforeUpdate(prevProps,prevState)
Do:last min dom operation
Do not : Cause side - Effects

6 -> componetDidUpdate()
Do:Cause side - Effects
Do not : Update state (triggers re-render)





