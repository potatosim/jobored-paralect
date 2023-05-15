import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import Vacancies from 'pages/Vacancies';
import Vacancy from 'pages/Vacancy';
import { RouteNames } from './RouteNames';
import FavoritesPage from 'pages/Favorites';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={RouteNames.Vacancies} replace />} />
        <Route path={RouteNames.Vacancies} element={<Vacancies />} />
        <Route path={RouteNames.Vacancy} element={<Vacancy />} />
        <Route path={RouteNames.Favorites} element={<FavoritesPage />} />
        <Route path={RouteNames.NotFoundPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
