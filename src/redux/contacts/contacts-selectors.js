const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;

const getVisibleContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
};

export { getContacts, getFilter, getVisibleContacts, getLoading };
