import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import Favorites from 'pages/Favorites';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Vacancies from 'pages/Vacancies';
import Vacancy from 'pages/Vacancy';
import { RouteNames } from './RouteNames';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={RouteNames.Vacancies} replace />} />
        <Route path={RouteNames.Vacancies} element={<Vacancies />} />
        <Route path={RouteNames.Vacancy} element={<Vacancy />} />
        <Route path={RouteNames.Favorites} element={<Favorites />} />
        <Route path={RouteNames.NotFoundPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
