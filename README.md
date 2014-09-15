dsloosass-poc
=============

Scalable Responsive Architecture Definition

.myModule {

  // Default basline for Module
  // Assume Mobile-first OR Desktop-First

  /* 
    All mixins/extends go at top 
    incase they need to 
    be overwritten
  */
  @include someMixin(arg1, arg2);
  @extend %somePlaceholder;

  /* 
    Display + Position + Sizing at top
    as they affect the flow and box model
  */
  display: block;
  
  position: relative;
    top: ...;
    left: ...;
    right: ...;
    bottom: ...;

  width: ...;
  height: ...;
  
  margin: ...;
  padding: ...;

  /* 
    Styling properties follow after foundation rules
    or should be abstracted into themes
  */
  background: {.....};
    color: ...;
    image: ...;
    size: ...;
    position: ...;

  font: ...;
    size: ...;
    family: ...;
    weight: ...;

  /* 
    Animation/Transition properties follow styling
    or should be abstracted into themes
  */
  transition: ...;
  animation: ...;

  /* 
    Psuedo Elements go before interaction states
  */
  &::before {
    display: block;
    content: ''
  }
  &::after {
    display: block;
    content: ''
  }
  
  &:hover, &:active {
    // Interactive layer for default mode

  }

  &.state-1 {
    // New default
    width: ...;
    height: ...;
    
    &:hover, &:active {
    // Interactive layer for state-1 mode

      &::before {
        // Psuedo Element changes
        // for interactive layer
        // in state-1 mode
      }
    }
  }

  &.state-2 {
    // ....
  }

  &.state-3 {
    // ....
  }

  @media (max-width: $micro-tablet) {
    // All the diff's upwards
    //
    //
    //
    //
    //
    //
  }

  @media (max-width: $tablet) {
    // All the diff's upwards
    //
    //
    //
    //
    //
    //
  }

  @media (max-width: $desktop) {
    // All the diff's upwards
    //
    //
    //
    //
    //
    //
  }
}
