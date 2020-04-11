import { takeLatest, call, put, all, select } from "redux-saga/effects";
import api from "services/api";
import { REQUEST } from "./types";
import { LIMIT, PAGINATION } from "./consts";
import { setData } from "./actions";
import build from "./buildListFromRequest";

async function getData({ page = 1 }) {
  const pagination = PAGINATION;

  pagination.page = page;

  try {
    const offset = (page - 1) * LIMIT;
    const {
      data: { data, meta },
    } = await api.get(
      `edge/characters?page[offset]=${offset}&page[limit]=${LIMIT}`
    );

    pagination.pages = Math.ceil(meta.count / LIMIT);

    return { data: build(data), pagination };
  } catch (e) {
    console.log(e);
    return { data: [], pagination };
  }
}

function* getDataRequest({ payload }) {
  const { page } = payload;
  const { data, pagination } = yield call(getData, { page });
  yield put(setData({ data, pagination }));
}

/* export function* reload({ payload }) {
  const { status, page } = payload;
  let { filters } = payload;
  let data = [];
  const currentPage = page || 1;
  let pageCount = 1;
  if (!filters) {
    filters = yield select(({ userApproval }) => userApproval.filters);
  }

  try {
    const statusVar = getVendavallStatusApprovalVar(status);
    const response = yield call(getData, statusVar, currentPage, filters);

    if (response.data && response.data.length > 0) {
      data = build(response.data);
      pageCount = response.pagination.last_page;
    }

    switch (status) {
      case APPROVED_STATUS:
        yield put(setTable(ApprovedHeaders, data, currentPage, pageCount));
        break;
      case DISAPPROVED_STATUS:
        yield put(setTable(DisapprovedHeaders, data, currentPage, pageCount));
        break;
      default:
        yield put(setTable(PendingHeaders, data, currentPage, pageCount));
    }
  } catch (e) {
    // DoNothing();
  }
}

export function* getCountParticipants() {
  try {
    const {
      data: { data },
    } = yield call(vendavallApi.get, "functionsadmin/getTotalRequests");

    const totals = {};
    data.forEach(item => {
      const { status_code, total } = item;
      totals[getStatusConstById(parseInt(status_code, 0))] = total;
    });

    yield put(setCountParticipants(totals));
  } catch (e) {
    // DoNothing();
  }
}

export function* approve({ payload }) {
  try {
    const { id } = payload;
    yield call(vendavallApi.post, `functionsadmin/approve/${id}`);

    const { tableData } = yield select(state => state.userApproval);
    const newTableData = tableData.map(item => ({
      ...item,
      newLabel:
        parseInt(id, 0) === parseInt(item.approval_id, 0) ? "Aprovado" : "",
    }));
    yield put(setTable(PendingHeaders, newTableData));
    yield put(actionFinish());
  } catch ({ message }) {
    errorMessage({ message: message || "Falha ao aprovar participante" });
    yield put(actionFinish());
  }
}

export function* disapprove({ payload }) {
  try {
    const { id, reason: message } = payload;
    if (!message) {
      throw new Error("Razão é obrigatória");
    }
    yield call(vendavallApi.post, `functionsadmin/recuse/${id}`, { message });

    const { tableData } = yield select(state => state.userApproval);
    const newTableData = tableData.map(item => ({
      ...item,
      newLabel:
        parseInt(id, 0) === parseInt(item.approval_id, 0) ? "Reprovado" : "",
    }));
    yield put(setTable(PendingHeaders, newTableData));
    yield put(actionFinish());
  } catch ({ message }) {
    errorMessage({ message: message || "Falha ao reprovar participante" });
    yield put(actionFinish());
  }
}

export function* filter({ payload }) {
  const { filters } = payload;
  const { status } = yield select(state => state.userApproval);
  yield call(reload, { payload: { status, page: 1, filters } });
}

*/

export default all([
  /* takeLatest("@userApproval/SET_STATUS", reload),
  takeLatest("@userApproval/COUNT_PARTICIPANTS_REQUEST", getCountParticipants),
  takeLatest("@userApproval/APPROVE_REQUEST", approve),
  takeLatest("@userApproval/DISAPPROVE_REQUEST", disapprove),
  takeLatest("@userApproval/APPROVE_FINISH", getCountParticipants),
  takeLatest("@userApproval/FILTER", filter), */
  takeLatest(REQUEST, getDataRequest),
]);
