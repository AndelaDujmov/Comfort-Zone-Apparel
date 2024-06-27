import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SelectListItems = ({items} : SelectList) => {
    return (
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={items}
          autoHighlight
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose one"
            />
          )}
        />
      );
}

export default SelectListItems;