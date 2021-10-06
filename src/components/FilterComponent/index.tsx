import { ClearButton, TextField, Container } from "./styles";

export function FilterComponent ({ filterText, onFilter, onClear }:any) { 
    return(
        <Container>
		<TextField
			id="search"
			type="text"
			placeholder="Filtrar por nome"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</Container>
    )
}
