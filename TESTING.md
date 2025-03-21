# Jackalope Planet Feature Checklist

## Test Information
- **Date:** [Enter Date]
- **Tester:** [Your Name]
- **Branch:** [Current Branch]
- **Version ID:** [From Console Output]

## Core Features
- [ ] 3D planet renders properly
- [ ] Controls work (WASD movement)
- [ ] Mode switching works (first/third person with 'T' key)
- [ ] Camera follows properly in third-person mode
- [ ] Performance is acceptable (no frame drops)
- [ ] Controls hint displays correctly
- [ ] Pointer lock functions correctly
- [ ] ESC key exits game mode
- [ ] Click to enter game mode works

## Modular Branch Features
- [ ] Player physics system applies gravity correctly
- [ ] Weapon system functions (if applicable)
- [ ] HumanPlayer movement is smooth
- [ ] BunnyPlayer animations work
- [ ] Collision detection works
- [ ] Flamethrower effect renders (if applicable)
- [ ] Control systems respond as expected
- [ ] UI elements display correctly
- [ ] InputManager handles all inputs

## Multiplayer & God Mode Features
- [ ] 'G' key toggles God Mode on/off
- [ ] '1' key spawns a new Jackalope player in God Mode
- [ ] '2' key spawns a new Merc player in God Mode
- [ ] 'T' key cycles between players in God Mode
- [ ] Active player is correctly highlighted in player list
- [ ] Controls properly transfer to the active player
- [ ] First-person camera works when switching to Merc
- [ ] Third-person camera works when switching to Jackalope
- [ ] Player info overlay shows correct information ('P' key)
- [ ] Multiple players can exist in the same scene

## Shortcode Testing
- [ ] Basic shortcode `[jackalope-planet]` works
- [ ] Height parameter works `[jackalope-planet height="500px"]`
- [ ] Width parameter works `[jackalope-planet width="800px"]`
- [ ] Class parameter works `[jackalope-planet class="custom-class"]`

## Regression Tests
- [ ] Functions on mobile devices (touch controls)
- [ ] Works on various browsers (Chrome, Firefox, Safari)
- [ ] No JS console errors
- [ ] Shortcode works in Gutenberg editor
- [ ] Compatible with theme styling
- [ ] No asset loading issues
- [ ] No memory leaks after extended use

## Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Notes
[Add any observations, bugs, or comments here]

## Console Test Results
```
// Paste console output from window.testJackalope.runTests() here
```

## Screenshots
[Attach any relevant screenshots if available]
