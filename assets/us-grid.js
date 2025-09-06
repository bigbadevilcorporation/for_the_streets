// Simple US tile grid positions (12 columns). Alaska and Hawaii placed below.
// Each entry: { abbr, name, row, col }
// This is an approximate, readable tile layout used by many grid maps.
(function(){
  const GRID = [
    { abbr: 'WA', name: 'Washington', row: 1, col: 1 },
    { abbr: 'MT', name: 'Montana', row: 1, col: 3 },
    { abbr: 'ND', name: 'North Dakota', row: 1, col: 4 },
    { abbr: 'MN', name: 'Minnesota', row: 1, col: 5 },
    { abbr: 'WI', name: 'Wisconsin', row: 1, col: 6 },
    { abbr: 'MI', name: 'Michigan', row: 1, col: 7 },
    { abbr: 'VT', name: 'Vermont', row: 1, col: 10 },
    { abbr: 'NH', name: 'New Hampshire', row: 1, col: 11 },
    { abbr: 'ME', name: 'Maine', row: 1, col: 12 },

    { abbr: 'OR', name: 'Oregon', row: 2, col: 1 },
    { abbr: 'ID', name: 'Idaho', row: 2, col: 2 },
    { abbr: 'SD', name: 'South Dakota', row: 2, col: 4 },
    { abbr: 'IA', name: 'Iowa', row: 2, col: 5 },
    { abbr: 'IL', name: 'Illinois', row: 2, col: 6 },
    { abbr: 'IN', name: 'Indiana', row: 2, col: 7 },
    { abbr: 'OH', name: 'Ohio', row: 2, col: 8 },
    { abbr: 'PA', name: 'Pennsylvania', row: 2, col: 9 },
    { abbr: 'NY', name: 'New York', row: 2, col: 10 },
    { abbr: 'MA', name: 'Massachusetts', row: 2, col: 11 },
    { abbr: 'CT', name: 'Connecticut', row: 2, col: 12 },

    { abbr: 'CA', name: 'California', row: 3, col: 1 },
    { abbr: 'NV', name: 'Nevada', row: 3, col: 2 },
    { abbr: 'WY', name: 'Wyoming', row: 3, col: 3 },
    { abbr: 'NE', name: 'Nebraska', row: 3, col: 4 },
    { abbr: 'MO', name: 'Missouri', row: 3, col: 5 },
    { abbr: 'KY', name: 'Kentucky', row: 3, col: 7 },
    { abbr: 'WV', name: 'West Virginia', row: 3, col: 8 },
    { abbr: 'VA', name: 'Virginia', row: 3, col: 9 },
    { abbr: 'MD', name: 'Maryland', row: 3, col: 10 },
    { abbr: 'DE', name: 'Delaware', row: 3, col: 11 },
    { abbr: 'NJ', name: 'New Jersey', row: 3, col: 12 },

    { abbr: 'AZ', name: 'Arizona', row: 4, col: 2 },
    { abbr: 'UT', name: 'Utah', row: 4, col: 3 },
    { abbr: 'CO', name: 'Colorado', row: 4, col: 4 },
    { abbr: 'KS', name: 'Kansas', row: 4, col: 5 },
    { abbr: 'AR', name: 'Arkansas', row: 4, col: 6 },
    { abbr: 'TN', name: 'Tennessee', row: 4, col: 7 },
    { abbr: 'NC', name: 'North Carolina', row: 4, col: 8 },
    { abbr: 'SC', name: 'South Carolina', row: 4, col: 9 },
    { abbr: 'GA', name: 'Georgia', row: 4, col: 10 },
    { abbr: 'RI', name: 'Rhode Island', row: 4, col: 11 },

    { abbr: 'NM', name: 'New Mexico', row: 5, col: 3 },
    { abbr: 'OK', name: 'Oklahoma', row: 5, col: 4 },
    { abbr: 'TX', name: 'Texas', row: 5, col: 5 },
    { abbr: 'LA', name: 'Louisiana', row: 5, col: 6 },
    { abbr: 'MS', name: 'Mississippi', row: 5, col: 7 },
    { abbr: 'AL', name: 'Alabama', row: 5, col: 8 },
    { abbr: 'FL', name: 'Florida', row: 5, col: 10 },

    { abbr: 'AK', name: 'Alaska', row: 6, col: 1 },
    { abbr: 'HI', name: 'Hawaii', row: 6, col: 2 },
  ];

  window.US_GRID = GRID;
})();

