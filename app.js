// Main application logic for the 1950s Character Generator
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const characterGenderSelect = document.getElementById('characterGender');
    const styleFoundationSelect = document.getElementById('styleFoundation');
    const hairstyleSelect = document.getElementById('hairstyle');
    const topsSelect = document.getElementById('tops');
    const bottomsSelect = document.getElementById('bottoms');
    const dressesSelect = document.getElementById('dresses');
    const dressGroup = document.getElementById('dressGroup');
    const jacketsSelect = document.getElementById('jackets');
    const footwearSelect = document.getElementById('footwear');
    const accessoryContainer = document.getElementById('accessoryContainer');
    const mainColorSelect = document.getElementById('mainColor');
    const secondaryColorSelect = document.getElementById('secondaryColor');
    const accentColorSelect = document.getElementById('accentColor');
    const generateBtn = document.getElementById('generateBtn');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const characterDescription = document.getElementById('characterDescription');
    const visualElements = document.getElementById('visualElements');
    const outfitsSelect = document.getElementById('outfits');
    const autoColorBtn = document.getElementById('autoColorBtn');
    
    // Maximum number of accessories allowed
    const MAX_ACCESSORIES = 3;
    
    // Initialize form
    initializeForm();
    
    // Event listeners
    characterGenderSelect.addEventListener('change', handleGenderChange);
    generateBtn.addEventListener('click', generateCharacter);
    randomizeBtn.addEventListener('click', randomizeAll);
    resetBtn.addEventListener('click', resetForm);
    outfitsSelect.addEventListener('change', handleOutfitChange);
    autoColorBtn.addEventListener('click', autoPickColorScheme);
    
    // Initialize the form with default options
    function initializeForm() {
        // Populate all selects based on the default gender (girl)
        handleGenderChange();
        
        // Populate color selects
        populateSelect(mainColorSelect, CONFIG.colors);
        populateSelect(secondaryColorSelect, CONFIG.colors);
        populateSelect(accentColorSelect, CONFIG.colors);
        
        // Clear output areas
        characterDescription.textContent = 'Your character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
    }
    
    // Handle gender change and update relevant form elements
    function handleGenderChange() {
        const gender = characterGenderSelect.value;
        
        // Update style foundation options
        populateSelect(styleFoundationSelect, CONFIG.styleFoundations[gender]);
        
        // Update outfits options
        populateSelect(outfitsSelect, CONFIG.outfits[gender], true);
        
        // Update hairstyle options
        populateSelect(hairstyleSelect, CONFIG.hairstyles[gender]);
        
        // Update tops options
        populateSelect(topsSelect, CONFIG.tops[gender]);
        
        // Update bottoms options
        populateSelect(bottomsSelect, CONFIG.bottoms[gender]);
        
        // Show/hide dresses based on gender
        if (gender === 'girl') {
            dressGroup.style.display = 'block';
            populateSelect(dressesSelect, CONFIG.dresses);
        } else {
            dressGroup.style.display = 'none';
        }
        
        // Update jackets options
        populateSelect(jacketsSelect, CONFIG.jackets[gender]);
        
        // Update footwear options
        populateSelect(footwearSelect, CONFIG.footwear[gender]);
        
        // Update accessories checkboxes
        populateAccessories(gender);
    }
    
    // Helper function to populate a select element with options
    function populateSelect(selectElement, options, isOutfit = false) {
        // Clear existing options
        selectElement.innerHTML = '';
        
        // Add a default empty option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        
        if (isOutfit) {
            defaultOption.textContent = 'Create your own custom outfit';
        } else {
            defaultOption.textContent = 'Select an option';
        }
        
        selectElement.appendChild(defaultOption);
        
        // Add all options from config
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            selectElement.appendChild(optionElement);
        });
    }
    
    // Populate accessories with checkboxes
    function populateAccessories(gender) {
        // Clear existing checkboxes
        accessoryContainer.innerHTML = '';
        
        // Add all accessories as checkboxes
        CONFIG.accessories[gender].forEach(accessory => {
            const accessoryItem = document.createElement('div');
            accessoryItem.className = 'accessory-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = accessory.value;
            checkbox.id = 'accessory-' + accessory.value;
            
            // Add event listener to enforce maximum selections
            checkbox.addEventListener('change', function() {
                const checkedBoxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
                if (checkedBoxes.length > MAX_ACCESSORIES) {
                    this.checked = false;
                    alert(`You can only select up to ${MAX_ACCESSORIES} accessories.`);
                }
            });
            
            const label = document.createElement('label');
            label.textContent = accessory.label;
            label.setAttribute('for', 'accessory-' + accessory.value);
            
            accessoryItem.appendChild(checkbox);
            accessoryItem.appendChild(label);
            accessoryContainer.appendChild(accessoryItem);
        });
    }
    
    // Reset the form to its initial state
    function resetForm() {
        // Reset all select elements to their first option
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Reset all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear character display
        characterDescription.textContent = 'Your character description will appear here after you generate a character.';
        visualElements.innerHTML = '';
        
        // Refresh form based on gender (to make sure everything is consistent)
        handleGenderChange();
    }
    
    // Function to handle outfit change
    function handleOutfitChange() {
        const selectedOutfit = outfitsSelect.value;
        
        // If no outfit selected, don't do anything
        if (!selectedOutfit) return;
        
        const gender = characterGenderSelect.value;
        
        // Find the selected outfit config
        const outfit = CONFIG.outfits[gender].find(o => o.value === selectedOutfit);
        if (!outfit) return;
        
        // Apply outfit components to form
        if (outfit.components.style) {
            styleFoundationSelect.value = outfit.components.style;
        }
        
        if (outfit.components.hairstyle) {
            hairstyleSelect.value = outfit.components.hairstyle;
        }
        
        if (outfit.components.top) {
            topsSelect.value = outfit.components.top;
        }
        
        if (outfit.components.bottom) {
            bottomsSelect.value = outfit.components.bottom;
        }
        
        // Handle dress if present (girls only)
        if (gender === 'girl' && outfit.components.dress) {
            dressesSelect.value = outfit.components.dress;
        }
        
        if (outfit.components.jacket) {
            jacketsSelect.value = outfit.components.jacket;
        }
        
        if (outfit.components.footwear) {
            footwearSelect.value = outfit.components.footwear;
        }
        
        // Handle accessories
        const checkboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        // Uncheck all
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones in the outfit
        if (outfit.components.accessories && outfit.components.accessories.length > 0) {
            outfit.components.accessories.forEach(accessory => {
                const checkbox = document.getElementById('accessory-' + accessory);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
        
        // Generate character based on the selected outfit
        generateCharacter();
    }
    
    // Generate character based on selected options
    function generateCharacter() {
        const gender = characterGenderSelect.value;
        const style = styleFoundationSelect.value;
        const hairstyle = hairstyleSelect.value;
        const top = topsSelect.value;
        const bottom = bottomsSelect.value;
        const dress = gender === 'girl' ? dressesSelect.value : '';
        const jacket = jacketsSelect.value;
        const footwear = footwearSelect.value;
        const mainColor = mainColorSelect.value;
        const secondaryColor = secondaryColorSelect.value;
        const accentColor = accentColorSelect.value;
        
        // Get selected accessories
        const selectedAccessories = [];
        const checkboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            selectedAccessories.push(checkbox.value);
        });
        
        // Validate that all required fields are filled
        if (!gender || !style || !hairstyle) {
            alert('Please select at least a gender, style foundation, and hairstyle!');
            return;
        }
        
        // Create character description
        let description = '';
        const pronoun = gender === 'girl' ? 'She' : 'He';
        
        // Start with style foundation
        if (style && DESCRIPTIONS.styleFoundations && DESCRIPTIONS.styleFoundations[gender] && DESCRIPTIONS.styleFoundations[gender][style]) {
            // Extract just the first sentence for brevity
            let styleFull = DESCRIPTIONS.styleFoundations[gender][style];
            let styleDesc = styleFull.split('.')[0] + '.';
            description += styleDesc + ' ';
        }
        
        // Add hairstyle
        if (hairstyle && DESCRIPTIONS.hairstyles && DESCRIPTIONS.hairstyles[gender] && DESCRIPTIONS.hairstyles[gender][hairstyle]) {
            description += `${pronoun} wears ${pronoun.toLowerCase()}r hair in a ${hairstyleSelect.options[hairstyleSelect.selectedIndex].text.toLowerCase()} style. `;
        }
        
        // Add clothing
        let outfitDesc = '';
        
        // Handle dress or top/bottom combo
        if (gender === 'girl' && dress) {
            const dressLabel = dressesSelect.options[dressesSelect.selectedIndex].text;
            outfitDesc += `a ${dressLabel.toLowerCase()}`;
        } else {
            // Add top
            if (top) {
                const topLabel = topsSelect.options[topsSelect.selectedIndex].text;
                outfitDesc += `a ${topLabel.toLowerCase()}`;
            }
            
            // Add bottom
            if (bottom) {
                const bottomLabel = bottomsSelect.options[bottomsSelect.selectedIndex].text;
                outfitDesc += ` with ${bottomLabel.toLowerCase()}`;
            }
        }
        
        // Add jacket if present
        if (jacket) {
            const jacketLabel = jacketsSelect.options[jacketsSelect.selectedIndex].text;
            outfitDesc += ` and a ${jacketLabel.toLowerCase()}`;
        }
        
        // Add the outfit description if we have one
        if (outfitDesc) {
            description += `${pronoun} is dressed in ${outfitDesc}. `;
        }
        
        // Add footwear if selected
        if (footwear) {
            const footwearLabel = footwearSelect.options[footwearSelect.selectedIndex].text;
            description += `On ${pronoun.toLowerCase()}r feet are ${footwearLabel.toLowerCase()}. `;
        }
        
        // Add accessory description if any selected
        if (selectedAccessories.length > 0) {
            const accessoryLabels = selectedAccessories.map(value => {
                const matchingAccessory = CONFIG.accessories[gender].find(acc => acc.value === value);
                return matchingAccessory ? matchingAccessory.label.toLowerCase() : value;
            });
            
            if (accessoryLabels.length === 1) {
                description += `${pronoun} accessorizes with ${accessoryLabels[0]}. `;
            } else if (accessoryLabels.length === 2) {
                description += `${pronoun} accessorizes with ${accessoryLabels[0]} and ${accessoryLabels[1]}. `;
            } else if (accessoryLabels.length >= 3) {
                description += `${pronoun} accessorizes with ${accessoryLabels[0]}, ${accessoryLabels[1]}, and ${accessoryLabels[2]}. `;
            }
        }
        
        // Add color scheme if selected
        const colors = [];
        if (mainColor && mainColor !== 'none') {
            const mainColorLabel = mainColorSelect.options[mainColorSelect.selectedIndex].text;
            colors.push(mainColorLabel.toLowerCase());
        }
        if (secondaryColor && secondaryColor !== 'none') {
            const secondaryColorLabel = secondaryColorSelect.options[secondaryColorSelect.selectedIndex].text;
            colors.push(secondaryColorLabel.toLowerCase());
        }
        if (accentColor && accentColor !== 'none') {
            const accentColorLabel = accentColorSelect.options[accentColorSelect.selectedIndex].text;
            colors.push(accentColorLabel.toLowerCase());
        }
        
        if (colors.length > 0) {
            if (colors.length === 1) {
                description += `The outfit features ${colors[0]} as the primary color. `;
            } else if (colors.length === 2) {
                description += `The outfit combines ${colors[0]} with ${colors[1]}. `;
            } else {
                description += `The outfit features a color scheme of ${colors[0]}, ${colors[1]}, and ${colors[2]} accents. `;
            }
        }
        
        // If we have an outfit selected, add that information
        const outfitValue = outfitsSelect.value;
        if (outfitValue) {
            const outfit = CONFIG.outfits[gender].find(o => o.value === outfitValue);
            if (outfit) {
                description += `This character embodies the classic ${outfit.label} archetype of 1950s Americana. `;
            }
        }
        
        // Add closing statement if description is still short
        if (description.length < 150) {
            description += `This look perfectly captures the spirit of 1950s teenage life, ready for sock hops, drive-ins, or cruising down Main Street.`;
        }
        
        // Display the character description
        characterDescription.textContent = description;
        
        // Create list of visual elements
        visualElements.innerHTML = '';
        
        // Helper function to add a visual element if selected
        function addVisualElement(label, value, collection) {
            if (value) {
                const item = document.createElement('li');
                const matchingOption = collection.find(opt => opt.value === value);
                item.textContent = `${label}: ${matchingOption ? matchingOption.label : value}`;
                visualElements.appendChild(item);
            }
        }
        
        // Check if an outfit was selected
        if (outfitValue) {
            const outfit = CONFIG.outfits[gender].find(o => o.value === outfitValue);
            if (outfit) {
                const outfitItem = document.createElement('li');
                outfitItem.textContent = `Outfit: ${outfit.label}`;
                visualElements.appendChild(outfitItem);
            }
        }
        
        // Add all selected elements to the list
        addVisualElement('Style', style, CONFIG.styleFoundations[gender]);
        addVisualElement('Hairstyle', hairstyle, CONFIG.hairstyles[gender]);
        addVisualElement('Top', top, CONFIG.tops[gender]);
        
        if (gender === 'girl' && dress) {
            addVisualElement('Dress', dress, CONFIG.dresses);
        } else {
            addVisualElement('Bottom', bottom, CONFIG.bottoms[gender]);
        }
        
        addVisualElement('Jacket', jacket, CONFIG.jackets[gender]);
        addVisualElement('Footwear', footwear, CONFIG.footwear[gender]);
        
        // Add colors if selected
        addVisualElement('Main Color', mainColor, CONFIG.colors);
        addVisualElement('Secondary Color', secondaryColor, CONFIG.colors);
        addVisualElement('Accent Color', accentColor, CONFIG.colors);
        
        // Add accessories if selected
        if (selectedAccessories.length > 0) {
            const accessoriesItem = document.createElement('li');
            accessoriesItem.textContent = 'Accessories: ';
            
            const accessoryLabels = selectedAccessories.map(value => {
                const matchingAccessory = CONFIG.accessories[gender].find(acc => acc.value === value);
                return matchingAccessory ? matchingAccessory.label : value;
            });
            
            accessoriesItem.textContent += accessoryLabels.join(', ');
            visualElements.appendChild(accessoriesItem);
        }
    }
    
    // Randomize all selections
    function randomizeAll() {
        const gender = getRandomOption(characterGenderSelect);
        characterGenderSelect.value = gender;
        
        // Update options based on gender first
        handleGenderChange();
        
        // Clear the outfit selection
        outfitsSelect.value = '';
        
        // Then randomize all the selections
        styleFoundationSelect.value = getRandomOption(styleFoundationSelect);
        hairstyleSelect.value = getRandomOption(hairstyleSelect);
        topsSelect.value = getRandomOption(topsSelect);
        bottomsSelect.value = getRandomOption(bottomsSelect);
        
        if (gender === 'girl') {
            dressesSelect.value = getRandomOption(dressesSelect);
        }
        
        jacketsSelect.value = getRandomOption(jacketsSelect);
        footwearSelect.value = getRandomOption(footwearSelect);
        
        // Randomize colors
        mainColorSelect.value = getRandomOption(mainColorSelect);
        secondaryColorSelect.value = getRandomOption(secondaryColorSelect);
        accentColorSelect.value = getRandomOption(accentColorSelect);
        
        // Randomize accessories (select random number between 0 and MAX_ACCESSORIES)
        const checkboxes = accessoryContainer.querySelectorAll('input[type="checkbox"]');
        
        // Uncheck all first
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of accessories
        const numToSelect = Math.floor(Math.random() * (MAX_ACCESSORIES + 1));
        const shuffledCheckboxes = Array.from(checkboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numToSelect && i < shuffledCheckboxes.length; i++) {
            shuffledCheckboxes[i].checked = true;
        }
        
        // Generate character with random selections
        generateCharacter();
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        // Skip the first option (assumed to be the default empty option)
        const options = Array.from(selectElement.options).slice(1);
        if (options.length === 0) return '';
        
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Auto pick color scheme function
    function autoPickColorScheme() {
        // Define color scheme combinations that work well together
        const colorSchemes = [
            // Classic 50s combos
            { main: "pastelPink", secondary: "turquoise", accent: "white" },
            { main: "red", secondary: "white", accent: "black" },
            { main: "navy", secondary: "white", accent: "red" },
            { main: "mint", secondary: "cream", accent: "coral" },
            { main: "turquoise", secondary: "white", accent: "red" },
            { main: "black", secondary: "red", accent: "white" },
            { main: "skyBlue", secondary: "white", accent: "navy" },
            { main: "yellow", secondary: "black", accent: "white" },
            { main: "polkaDot", secondary: "red", accent: "white" },
            { main: "checkered", secondary: "black", accent: "red" },
            // Diner themed
            { main: "red", secondary: "checkered", accent: "silver" },
            { main: "black", secondary: "red", accent: "gold" },
            // Varsity/Letterman
            { main: "navy", secondary: "gold", accent: "cream" },
            { main: "red", secondary: "gold", accent: "cream" },
            // Classic patterns
            { main: "gingham", secondary: "navy", accent: "white" },
            { main: "plaid", secondary: "navy", accent: "white" },
        ];
        
        // Pick a random color scheme
        const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
        
        // Apply to select elements
        if (randomScheme.main) {
            const mainOption = Array.from(mainColorSelect.options).find(opt => opt.value === randomScheme.main);
            if (mainOption) mainColorSelect.value = randomScheme.main;
        }
        
        if (randomScheme.secondary) {
            const secondaryOption = Array.from(secondaryColorSelect.options).find(opt => opt.value === randomScheme.secondary);
            if (secondaryOption) secondaryColorSelect.value = randomScheme.secondary;
        }
        
        if (randomScheme.accent) {
            const accentOption = Array.from(accentColorSelect.options).find(opt => opt.value === randomScheme.accent);
            if (accentOption) accentColorSelect.value = randomScheme.accent;
        }
    }
});