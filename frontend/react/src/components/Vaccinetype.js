import React from 'react';

function Vaccinetype() {
    return(
        <div style={{ marginTop: '20px' }}>


<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Covaxin</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Covid-Shield</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label class="form-check-label" for="inlineRadio3">Sputnik </label>
</div>
            
        </div>
    )
}
export default Vaccinetype