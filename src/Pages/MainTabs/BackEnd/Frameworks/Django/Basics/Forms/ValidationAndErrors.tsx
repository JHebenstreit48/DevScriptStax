import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ValidationAndErrors = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Forms/ValidationAndErrors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Validation & Errors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationAndErrors;
