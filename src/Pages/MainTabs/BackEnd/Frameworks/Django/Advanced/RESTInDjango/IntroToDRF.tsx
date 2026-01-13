import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntroToDRF = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Advanced/RESTInDjango/IntroToDRF';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Intro to DRF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntroToDRF;
