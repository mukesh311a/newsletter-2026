import pandas as pd
df = pd.read_csv(r'c:\Users\Mukesh\Downloads\Newsletter 2026\Studens data.csv', encoding='latin-1')
it_rows = df[df['Department'].str.contains('IT', case=False, na=False)]
print('COLUMNS:', df.columns.tolist())
print('TOTAL IT ROWS:', len(it_rows))
print('---')
for i, r in it_rows.iterrows():
    date = str(r.get('Date/Period', ''))
    level = str(r.get('Level of Achievement', ''))
    cat = str(r.get('Category', ''))
    name = str(r.get('Student Name', ''))
    roll = str(r.get('Roll No.', ''))
    ach = str(r.get('Achievement Details', ''))[:140]
    print(f'ROW {i}: DATE=[{date}] LVL=[{level}] CAT=[{cat}] NAME=[{name}] ROLL=[{roll}] ACH=[{ach}]')
