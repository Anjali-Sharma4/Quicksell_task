Functional requirements - 

1. The starting value of the counter should be picked from the GET API shared below. If no value is present then the counter will start at 1.
2. The counter can be initialized with a max value. The max value will come from an environment variable `MAX_VALUE`. If no environment variable is present, then assume that the max value will be 1000. If a max value is present then the counter can be incremented to only that max value. There is no minimum value for the counter.
3. The user can also type a value into the counter.
4. The value of the counter will be additionally displayed below the counter as a separate "Counter value" component as shown in the design. This additional "Counter value : 10" text component should be a separate component and not part of the actual counter component.
