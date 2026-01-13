import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DjangoVsOtherFrameworks = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/Fundamentals/DjangoVsOtherFrameworks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Django vs Other Frameworks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DjangoVsOtherFrameworks;
