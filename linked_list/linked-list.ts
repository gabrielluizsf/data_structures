type List = null | {
  element: number;
  next:    List;
};
const empty: List   =  null;
const append  =  (list: List, element: number): List => ({
  element: element,
  next:    list,
});

const first_element_from_linked_list  = append(empty, 8);
const second_element_from_linked_list = {
  element: 9,
  next:    first_element_from_linked_list,
};
const third_element_from_linked_list = {
  element: 10,
  next:    second_element_from_linked_list,
};

console.log(third_element_from_linked_list);
