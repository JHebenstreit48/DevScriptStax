import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JPAAndEntities = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Data/JPAAndEntities';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JPA & Entities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JPAAndEntities;
